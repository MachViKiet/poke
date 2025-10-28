import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  // State để lưu trữ giá trị đã giảm độ nảy
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Thiết lập hẹn giờ (timer) để cập nhật giá trị đã giảm độ nảy sau `delay`
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean-up function: Xóa hẹn giờ cũ mỗi khi `value` hoặc `delay` thay đổi.
    // Điều này đảm bảo rằng timer cũ bị hủy nếu người dùng gõ tiếp.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect nếu value hoặc delay thay đổi

  return debouncedValue;
}

export default useDebounce;
import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Messageblock({messages, setMessages}) {
  const [isVisible, setIsVisible] = useState(false);

  const AUTO_HIDE_DURATION = 2000; // 5 giây

  useEffect(() => {
    if (messages) {
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        setMessages(null); 
      }, AUTO_HIDE_DURATION);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsVisible(false);
    }
  }, [messages, setMessages]); // Dependency array: chạy lại khi messages thay đổi

  if (!messages || !isVisible) {
    return null; // Không render gì cả nếu không có message hoặc đã hết giờ
  }


  
  if (!messages || !isVisible) {
    return null; // Không render gì cả nếu không có message hoặc đã hết giờ
  }


    return (
      <Alert
        sx = {{ position: 'absolute', top: '80px', zIndex: 10, right: '10px', minWidth: '40vw' }} 
        severity={messages.severity}>
          {messages.text}
      </Alert> 
  );
}

export default Messageblock

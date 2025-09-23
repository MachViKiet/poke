export function getTypeColors(type) {
  switch (type) {
    case 'grass':    return ['#A8E6A2', '#7AC74C'];
    case 'poison':   return ['#C77DDA', '#A33EA1'];
    case 'fire':     return ['#FFB56B', '#EE8130'];
    case 'water':    return ['#A4BDF8', '#6390F0'];
    case 'bug':      return ['#CDE36B', '#A6B91A'];
    case 'electric': return ['#FFE680', '#F7D02C'];
    case 'psychic':  return ['#FFA0BC', '#F95587'];
    case 'rock':     return ['#D1C48A', '#B6A136'];
    case 'ground':   return ['#F1DCA3', '#E2BF65'];
    case 'ice':      return ['#CFF3F2', '#96D9D6'];
    case 'dragon':   return ['#A58AFD', '#6F35FC'];
    case 'dark':     return ['#A08774', '#705746'];
    case 'fairy':    return ['#F2B9CF', '#D685AD'];
    case 'ghost':    return ['#A293C7', '#735797'];
    case 'steel':    return ['#D7D7E6', '#B7B7CE'];
    case 'fighting': return ['#F29C92', '#C22E28'];
    case 'flying':   return ['#C1B5F9', '#A98FF3'];
    case 'normal':
    default:         return ['#C9CFAC', '#A8A77A'];
  }
}

export function getCardGradient(primary, secondary) {
  const [c1] = getTypeColors(primary);
  const [, c2] = getTypeColors(secondary || primary);
  return { '--c1': c1, '--c2': c2 };
}


export function getTypeSolidColor(type) {
  switch (type) {
    case 'grass':    return '#7AC74C';
    case 'poison':   return '#A33EA1';
    case 'fire':     return '#EE8130';
    case 'water':    return '#6390F0';
    case 'bug':      return '#A6B91A';
    case 'electric': return '#F7D02C';
    case 'psychic':  return '#F95587';
    case 'rock':     return '#B6A136';
    case 'ground':   return '#E2BF65';
    case 'ice':      return '#96D9D6';
    case 'dragon':   return '#6F35FC';
    case 'dark':     return '#705746';
    case 'fairy':    return '#D685AD';
    case 'ghost':    return '#735797';
    case 'steel':    return '#B7B7CE';
    case 'fighting': return '#C22E28';
    case 'flying':   return '#A98FF3';
    case 'normal':
    default:         return '#A8A77A';
  }
}
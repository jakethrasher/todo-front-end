export function getTokenFromLocalStorage(){
    const token = localStorage.getItem('TOKEN');
    if(token) return JSON.parse(token)

    else return ''
  };
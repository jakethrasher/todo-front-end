export function getToken(){
    const token = localStorage.getItem('TOKEN');
    if(token) return JSON.parse(token)

    else return {}
  }
import moment from "moment";

export const getBase64 = (file: Blob) => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
  
      // Convert the file to base64 text
      reader.readAsDataURL(file);
  
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object

        /// i did this now


        // baseURL = reader.result;    solve this issue
        resolve(baseURL);
      };
    });
  };

  export function colorsGenerator(key: string){
    const colorValues: any = {
      UPCOMING: '#af0909c6',
      INPROGRESS: '#FD6820',
      COMPLETED: '#005C17',
      URGENT: '#f50101',
      HIGH: '#ffcc01',
      NORMAL: '#6fddff',
      LOW: '#d8d8d8',
    }
    return colorValues[key] || '#000000'
  }
  
  
  export function sentenceCase(value: string) {
    return value.toLowerCase().replace(/^./g, value.charAt(0).toUpperCase())
  }
  
  export function titleCase(value: string) {
      return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  export function whichHour() {
    const hours = new Date().getHours();
    const min = new Date().getMinutes(); // eslint-disable-line
    return hours < 12
      ? 'Morning'
      : hours >= 12 && hours < 17
      ? 'Afternoon'
      : 'Evening';
  }
  
  export function dateFormate(date: string) {
    return new Date(date).getTime()
      ? moment(new Date(date)).format('DD MMM, YYYY')
      : '-- / --';
  }
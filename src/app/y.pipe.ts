import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  fullname:string=''

  transform(allcontacts:any,searchKey:string,propertyName:string):any{
    
    const result:any = []
    if(!allcontacts || searchKey =='' || propertyName==''){
      return allcontacts
    }
    allcontacts.forEach((contact:any)=>{
      let text1= contact.firstName;
      let text2= contact.lastName;
      this.fullname=text1.concat(text2)
      if(this.fullname.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }


}
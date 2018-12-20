import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitName'})

export class LimitName implements PipeTransform {
  transform(msg: string, chars?: number): string {
    if(msg.length > chars) {
      return msg.substring(0,chars).concat(' ','...');
    } else {
      return msg;
    }
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitName'})
export class LimitName implements PipeTransform {
  transform(msg: string, chars?: number): string {
      return msg.substring(0,chars).concat(' ','...');
  }
}
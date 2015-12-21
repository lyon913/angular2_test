import {Pipe} from "angular2/core";
import {PipeTransform} from "angular2/core";
/**
 * Created by Lyon on 2015/12/18.
 */

@Pipe({
    name:'include',
    pure: false
})
export  class IncludePipe {
    transform(value,[field,letter]:[string,string]){
        return value.filter(item => item[field].include(letter));
    };
}
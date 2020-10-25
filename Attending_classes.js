// let optional_class_schedule = [[2020-10-20 20:00:00, 2020-10-21 14:00:00], [2020-10-21 02:00:00, 2020-21-10 18:00:00]]
// let class_schedule = [[2020-10-20 12:00:00, 2020-10-21 08:00:00], [2020-10-20 16:00:00, 2020-10-21 12:00:00]]
// These are arrays i have taken 
// I have consider date and time in epoc time 
let optional_class_schedule = [[1603224000, 1603245600],[1603288800,1603303200]]
let class_schedule = [[1603195200, 1603209600], [1603267200, 1603292400]]
optional_classes(class_schedule, optional_class_schedule);
function optional_classes(class_shd, optional_shd) {
    let opt_clas = [];
    for (let i = 0; i < optional_shd.length; i++) {
        let opt_class_start = optional_shd[i][0];
        let opt_class_end = optional_shd[i][1];
        for(let j=i;j<class_shd.length;j++){
            let schd_class_start = class_shd[j][0];
            let schd_class_end = class_shd[j][1];
            
            if((opt_class_start < schd_class_start) && (opt_class_start <= schd_class_end) ){
                if(opt_class_end < schd_class_start){
                    opt_clas.push([opt_class_start,opt_class_end])
                    break
                }
            }
            if((opt_class_start > schd_class_start) && (opt_class_start >= schd_class_end)){
                opt_clas.push([opt_class_start,opt_class_end])
                break
            }
        }
            
    }
    console.log(opt_clas)
}

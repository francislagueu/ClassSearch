export class Classes{
  class_number:string;
  subject:string;
  catalog_number:string;
  section_number:string;
  title:string;
  course_id:string;
  description:string;
  units:string;
  term:string;
  meetings: [{
    meeting_number:string;
    location:string;
    start_time:string;
    end_time:string;
    days:string;
  }];
  instructors:[{
    instructor:string;
  }]

  constructor(){}
}

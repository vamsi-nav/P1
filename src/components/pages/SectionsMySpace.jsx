import "./SectionsMySpace.css";

export default function Sections(){
  const SectionsList = [{id:1, Name:"Activities", href:"overview-actionlist"},
                      {id:2, Name:"Feeds", href:"-feeds"}, 
                      {id:3, Name:"Profile", href:"-profile"}, 
                      {id:4, Name:"Approvals", href:"-approvals"}, 
                      {id:5, Name:"Leave", href:"-leave"}, 
                      {id:6, Name:"Attendance", href:"-attendance"}]

  const ListSections = SectionsList.map(SectionsListItem => <li className="SectionItem" key={SectionsListItem.id}>
                                                              <a className="SectionLink" href={SectionsListItem.href}>
                                                                {SectionsListItem.Name}
                                                              </a>
                                                            </li>)     


                                                            
  return(
    <div>
    <div className="SectionsList">
      {ListSections}
    </div>
    <i></i>
    </div>
  );
}
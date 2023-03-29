import ProjectItem from "./ProjectItem";

export default function Projects(props) {
  const createProjectItem = props.data.projects.map(it=>{
    return (<ProjectItem imageBck={it.imageBck} title={it.title} tech={it.tech} key={it.id} anchor={it.anchor}/>)
  })
  
    return (
    <div  id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#22c4c7]">
          Projects
        </p>
        <h2 className="py-4">What I´ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
     {createProjectItem}     
     
        </div>
      </div>
    </div>
  );
}

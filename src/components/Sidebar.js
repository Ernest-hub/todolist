function Sidebar(props) {
  return (
        <div className="sidebar">
          <ul>
            {props.items.map((item, i) => <li key={i}>{item}</li> )}
            
            
          </ul>
        </div>
    )
}

export default Sidebar;
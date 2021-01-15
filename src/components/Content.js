

const Content = (props) => {
  return (
      <div className="main-content">
    { props.titles.map((title) => <div className="my-box">{title}</div>) }

      </div>
  )
 }
export default Content;
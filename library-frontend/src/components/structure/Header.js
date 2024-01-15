export const RenderHeader = () => {

    return (
         <div className="header">
              <div className="logo">
                   <img onClick={ () => { window.location.href="https://www.boardpackager.com/"} } src="/BP_logo.svg" alt="BP Logo"/>
              </div>
              <h1>boardpackager library</h1>
         </div>
    )
}
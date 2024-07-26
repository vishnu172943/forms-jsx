const inputref1=React.createRef();
const inputref2=React.createRef();
let rows=[];
let addOne=()=>{
  rows.push(<tr>
  <td>{inputref1.current.value}</td>
  <td>{inputref2.current.value}</td>
  </tr>);
  rootElement.render(<App />);
}
const Form = () => <>
<h1>student's form</h1>
<input type="text"ref={inputref1}/>
<input type="number" ref={inputref2} />
<input type="submit" onClick={addOne}></input>

</>;
const Result=()=>(
    <div id="container">
    <table border="1">
    <tr>
    <th>Student's Name</th>
    <th>Marks</th>
    </tr>
    {rows.map((res,index)=>
    <>
     {res}
    </>)}
    </table>
</div>

    )
 
 
const App = () => (
   <>
    <Form />
    <br/>
    <br/>
    <br/>
   <Result/>
    </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

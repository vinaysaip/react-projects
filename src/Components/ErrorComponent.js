import {useRouteError} from "react-router"
const ErrorComponet = () =>{
    const error = useRouteError();
    console.log(error);
    return (<div>
        <img src="https://cdn.pixabay.com/photo/2016/01/07/15/57/dog-1126025_640.jpg" alt="dog Photo" className="oops-img"/>
        <h1>Oops!!!</h1>
        <p>Something went wrong!!!</p>
        <p>{error.status} : {error.statusText}</p>
        <p>{error?.error?.message}</p>
    </div>)
}

export default ErrorComponet;
const ErrorMsg = ({items}) =>
{
    let msg = (items.length === 0) ? <h3>I am still hungry</h3> : null;

    return msg;
}

export default ErrorMsg;
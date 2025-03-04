function getInputValue(id)
{
    const value = document.getElementById(id).value;
    return parseInt(value);
}
function getInputInnerText(id)
{
    const value = document.getElementById(id).innerText;
    return parseFloat(value);

}
function setValue(id, value){
    document.getElementById(id).innerText = value;
}
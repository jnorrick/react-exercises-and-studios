export default function HobbyLinks () {
    const hobbyLinks = ["https://www.wowhead.com/" , "https://www.dreadcentral.com/" ]
    
    return (
    <>
    <a href = {hobbyLinks[0]}> Wowhead </a> 
    &nbsp;
    <a href = {hobbyLinks[1]}> Dread Central</a>
    </>
    )
}
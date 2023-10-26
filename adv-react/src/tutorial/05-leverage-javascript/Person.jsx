import avatar from '../../assets/default-avatar.svg';

function Person({ name, nickName = "no nickname", images }) {

   // The nullish coalescing (??) operator is a logical operator that returns its 
   // right-hand side operand when its left-hand side operand is null or undefined.
   const img = images?.[0]?.small?.url ?? avatar;

   return (
      <div>
         <h3>{name}</h3>
         <h4>NickName : {nickName}</h4>
         <img src={img} alt={name} style={{ width: "100px" }} />
      </div>
   )
}
export default Person
export  const initalState = {
term:null
};
//  frist show
export const actionType = {
    SET_SEARCH_TEARM:`SET_SEARCH_TEARM`,

    };

    const reducer =(state , action )=>{
        console.log(action);
        
        switch(action.type){
            case actionType.SET_SEARCH_TEARM:
            return{
                ...state,
                term:action.term,
            }
            
            default:
                 return state;
        }
    }
    export default reducer;
export default {
  Get_User_List_Mutation (state, entity) {
    state.user_list = entity["data"]
    console.log(state.user_list)
    state.user_total = entity["total"]
    state.user_total_page = entity["totalPage"]
  },
  Get_User_Info_Mutation(state,entity){
    state.user_info = entity["data"]
  },
  Delete_User(state){
    state.user_deleted = true
  },
  Edit_User(state){
    state.user_edited = true
  },
  Get_Product_List_Mutation(state,entity){
    state.product_list = entity["data"]
    state.product_total = entity["total"]
  },
  Get_Product_Info_Mutation(state,entity){
    state.product_info = entity["data"]
  },
  Delete_Product(state){
    state.product_deleted = true
  },
  Get_Banner_List_Mutation(state,entity){
    state.banner_list = entity["data"]
    console.log(state.banner_list)
  },
  Delete_Banner(state){
    state.banner_deleted = true
  },
  ADD_Banner_Mutation(state){
    state.banner_added = true
  },
  Get_Order_List_Mutation(state,entity){
    state.order_list = entity["data"]
    console.log("Get_Order_List_Mutation")
    console.log(state.order_list)
  },
  Delete_Order(state){
    state.order_deleted = true
  },
  Get_Category_List_Mutation(state,entity){
    state.category_list = entity["data"]
    console.log(state.category_list)
    state.category_total = entity["total"]
  },
  Delete_Category(state){
    state.category_deleted = true
  },
  Edit_Category(state){
    state.category_edited = true
  }
}


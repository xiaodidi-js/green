//修改购物车单个商品
export const setCartStorage = function ({dispatch},cartobj) {
	dispatch('SETCARTOBJ',cartobj);
}

//再次购买添加商品
export const setCartAgain = function ({dispatch},cartobjs) {
	dispatch('SETCARTOBJS',cartobjs);
}

//增加购物车单个商品数量
export const increNums = function ({dispatch},id,format) {
	dispatch('INCRECARTNUMS',id,format);
}

//减少购物车单个商品数量
export const reduceNums = function ({dispatch},id,format) {
	dispatch('REDUCECARTNUMS',id,format);
}

//删除购物车单个商品
export const delSingle = function ({dispatch},id,format) {
	dispatch('DELCARTOBJ',id,format);
}

//删除购物车多个商品
export const delMultiple = function ({dispatch},objs) {
	dispatch('DELCARTOBJS',objs);
}

//清空购物车
export const clearAll = function ({dispatch}) {
	dispatch('CLEARCART');
}

//修改购物车单个商品
export const setSelCartStorage = function ({dispatch},selarray) {
	dispatch('SETSELCART',selarray);
}

//清空购物车
export const clearSel = function ({dispatch}) {
	dispatch('CLEARSELCART');
}
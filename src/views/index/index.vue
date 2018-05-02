<template>
	<div>
		<table>
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>年龄</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in list" :key="index">
				<td>{{index}}</td>
				<td>{{item.name}}</td>
				<td>{{item.age}}</td>
				<td>
					<button @click="editItem(item)">编辑</button>
					<button @click="delItem(item)">删除</button>
				</td>
			</tr>
		</table>
		<div>
			<input type="text" v-model="name"/>
			<input type="text" v-model="age"/>
			<button @click="addItem">添加</button>
		</div>
		
		<div class="dialog" v-if="isShowDialog">
			<form action="">
				<input type="text" v-model="editItemObj.name"/>
				<input type="text" v-model="editItemObj.age"/>
				<button @click="confirmEditItem">保存</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				result: null,
				name: '',
				age: 0,
				list: [],
				editItemObj: {},
				isShowDialog: false
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			async getList() {
				let result = await this.$get('/getList');
				if (result.resultCode === 0) {
					this.list = result.list;
				}
			},
			async addItem() {
				let result = await this.$post('/addPeople', {
					name: this.name,
					age: this.age
				});
				if (result.resultCode === 0) {
					this.getList();
				}
			},
			async delItem(item) {
				let result = await this.$post('/delPeople', {
					id: item._id
				});
				if (result.resultCode === 0) {
					this.getList();
				}
			},
			editItem(item) {
				this.editItemObj = Object.assign({},item);
				this.isShowDialog = true;
			},
			async confirmEditItem() {
				let result = await this.$post('/editPeople', {
					id: this.editItemObj._id,
					name: this.editItemObj.name,
					age: this.editItemObj.age
				});
				this.isShowDialog = false;
				
				if (result.resultCode === 0) {
					this.getList();
				}
			}
		}
	}
</script>

<style lang="less">
	.dialog {
		width: 50%;
		height: 400px;
		background: #fff;
		position: fixed;
		z-index: 1000;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
class AppMainCtrl {

	constructor($mdSidenav) {
		this.title = 'App Title';
		this.$mdSidenav = $mdSidenav
	}

	toggleSideBar() {
	    this.$mdSidenav('uno-sidebar').toggle();
	}

}

AppMainCtrl.$inject = ['$mdSidenav'];
export default AppMainCtrl;
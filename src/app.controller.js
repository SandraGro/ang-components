class AppMainCtrl {

	constructor($http, $mdSidenav) {
		this.title = 'App Title';
		this.username = 'Karla Martin';
		this.subscriptions = [];
		this.$mdSidenav = $mdSidenav;
		this.$http = $http;
		this.loadSubscriptions();
	}

	loadSubscriptions() {
		const { $http } = this;
		$http.get('./assets/subscriptions.json')
            .then((response) => {
                this.subscriptions = response.data.subscriptions;
            })
            .catch(() => {
                this.subscriptions = [];
            })
	}

	toggleSideBar() {
	    this.$mdSidenav('uno-sidebar').toggle();
	}

}

AppMainCtrl.$inject = ['$http', '$mdSidenav'];
export default AppMainCtrl;
class AppMainCtrl {

	constructor($http, $mdSidenav, $mdDialog, $mdToast) {
		this.title = 'App Title';
		this.username = 'Karla Martin';
		this.subscriptions = [];
		this.$mdSidenav = $mdSidenav;
		this.$mdDialog = $mdDialog;
		this.$mdToast = $mdToast;
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

	subscribe(ev, name){
		const {$mdDialog, $mdToast} = this;
		if(name == 'Unosquare') {
			var confirm = $mdDialog.confirm()
			  .title('Subscription')
			  .textContent('Are you sure you want a subscription to : ' + name +'?')
			  .targetEvent(ev)
			  .ok('YES!!!!')
			  .cancel('No');

			$mdDialog.show(confirm)
		} else{
			$mdToast.show(
			  $mdToast.simple()
				.textContent('Subscription: ' + name)
				.position('top right')
				.hideDelay(3000)
			);
		}

	}

}

AppMainCtrl.$inject = ['$http', '$mdSidenav', '$mdDialog', '$mdToast'];
export default AppMainCtrl;
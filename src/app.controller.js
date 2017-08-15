class AppMainCtrl {

	constructor($mdSidenav) {
		this.title = 'App Title';
		this.username = 'Karla Martin';
		this.$mdSidenav = $mdSidenav
		this.subscriptions = [
			{
				code: 'ginv',
				title: 'GLAXIS Invoicing',
				description: 'This is a test description for Glaxis Invoicing'
			},
			{
				code: 'qbks',
				title: 'Quick Books',
				description: 'This is a test description for Quick Books'
			}
		]
	}

	toggleSideBar() {
	    this.$mdSidenav('uno-sidebar').toggle();
	}

	cancelSubscription(subscriptionCode) {
		console.log('Subscription Canceled')
	}

	subscribe(subscriptionCode) {
		console.log('Subscription to: ', subscriptionCode)
	}

}

AppMainCtrl.$inject = ['$mdSidenav'];
export default AppMainCtrl;
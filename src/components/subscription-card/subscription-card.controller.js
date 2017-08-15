class SubscriptionCardCtrl {

	constructor($mdToast) {
		this.$mdToast = $mdToast;
	}

	cancel() {
		const { $mdToast } = this;
		$mdToast.show(
		  $mdToast.simple()
			.textContent('Canceling Subscription: ' + this.title)
			.position('top right')
			.hideDelay(3000)
		);
	}

	subscribe($event, subscriptionName) {
		console.log('Subscribing to:', subscriptionName)
		//TODO: Common actions
		this.onSubscribe($event, subscriptionName);
	}

}

SubscriptionCardCtrl.$inject = ['$mdToast'];
export default SubscriptionCardCtrl;
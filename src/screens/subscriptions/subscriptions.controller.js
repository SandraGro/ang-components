class SubscriptionsScreenCtrl {

    constructor($http, $mdDialog, $mdToast) {
        this.subscriptions = [];
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

    subscribe(ev, name) {
        const {$mdDialog, $mdToast} = this;
        if(name == 'Unosquare') {
            var confirm = $mdDialog.confirm()
                .title('Subscription')
                .textContent('Are you sure you want a subscription to : ' + name +'?')
                .targetEvent(ev)
                .ok('YES!!!!')
                .cancel('No');

            $mdDialog.show(confirm)
        } else {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Subscription: ' + name)
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }

}

SubscriptionsScreenCtrl.$inject =  ['$http', '$mdDialog', '$mdToast'];
export default SubscriptionsScreenCtrl;
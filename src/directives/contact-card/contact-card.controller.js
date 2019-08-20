import SubscriptionCardCtrl from "../../components/subscription-card/subscription-card.controller";

class ContactCardCtrl {

    constructor($scope){
        $scope.name = 'Karla Martin';
        $scope.position = 'Software Engineer';
        $scope.company = 'Unosquare';
    }
}

SubscriptionCardCtrl.$inject = ['$scope'];
export default ContactCardCtrl

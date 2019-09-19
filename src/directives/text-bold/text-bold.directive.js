export default function TextBold() {
    return {
        restrict: 'A',
        link: (scope, element) => {
            const boldedText = element.text().bold();
            element.html(boldedText)
        }
    }
}

import $ from 'jquery'
export default function (
  element: JQuery,
  intShakes: number /*Amount of shakes*/,
  intDistance: number /*Shake distance*/,
  intDuration: number /*Time duration*/
) {
  element.each(function () {
    var jqNode = $(self)
    jqNode.css({ position: 'relative' })
    for (var x = 1; x <= intShakes; x++) {
      jqNode
        .animate({ left: intDistance * -1 }, intDuration / intShakes / 4)
        .animate({ left: intDistance }, intDuration / intShakes / 2)
        .animate({ left: 0 }, intDuration / intShakes / 4)
    }
  })
  return element
}

prep()

function prep() {
  $('[data-toggle="tooltip"]').tooltip()
  $(function () {
    $('[data-toggle="popover"]').popover();
  })
}

function age() {
  document.getElementById("age").innerText = Math.round(moment().diff("2004-11-15", "days") / 365).toString();
}

function track() {
  $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    data = data.trim().split('\n').reduce(function(obj, pair) {
      pair = pair.split('=');
      return obj[pair[0]] = pair[1], obj;
    }, {});
    send(data["ip"])
  });
}

function send(ip) {
  //will do this sometime ¯\_(ツ)_/¯
}
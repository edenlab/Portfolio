var urlPath    = "/tracks/<%= @track.id %>"
window.history.pushState('',"", urlPath);
$('.modal-show-container').addClass('is-active')
$('.modal-show').html("<%= j render 'track_card', track: @track %>")

itsTheOnlyProblem()

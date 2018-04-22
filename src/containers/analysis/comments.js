import React from 'react';

class AppInfo extends React.Component {

  render() {
    const { comments } = this.props;
    console.log(comments);
    return (
      <div class="card card-table mg-t-20 mg-sm-t-30">
          <div class="table-responsive">
            <table class="table mg-b-0 tx-13">
              <thead>
                <tr class="tx-10">
                  <th class="pd-y-5">Comment Details</th>
                  <th class="pd-y-5">Sentiment</th>
                  <th class="pd-y-5 tx-left">Comment</th>
                  <th class="pd-y-5 tx-right">Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  comments.map((comment) => {
                    const stars = []
                    for(let numStars = 0; numStars < comment.rating; numStars++) {
                      stars.push(<i key={numStars} class="fa fa-star mg-r-5" />)
                    }
                    return (
                      <tr>
                        <td>
                          <a href="" class="tx-inverse tx-medium d-block">{comment.title}</a>
                          <span class="tx-12 d-block">{stars}</span>
                        </td>
                        <td>{comment.sentiment}</td>
                        <td class="valign-middle tx-left">
                          <h6>{comment.content}</h6>
                          <p><em>Keywords: {comment.entities.reduce((p, c) => `${p}${p ? ', ': ''}${c}`, '')}</em></p>
                        </td>
                        <td class="valign-middle tx-right">{timeConverter(comment.updated_at)}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div class="card-footer tx-12 pd-y-15 bg-transparent">
          </div>
        </div>
    );
  }
}

export default AppInfo;

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

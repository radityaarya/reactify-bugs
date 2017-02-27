import React from 'react';

export class Card extends React.Component{
  render() {
    const list = [
        {BugId : '85aa6df1-2acf-5388-bf27-8ff618276c63', desc: 'Qblol mabok', severity: 'low', ass: 'mail@hacktiv8.com'},
        {BugId : '85aa6df1-2acf-5388-bf27-8ff618276c67', desc: 'Yoni Pe\'a', severity: 'high', ass: 'mail@hacktiv8.com'},
        {BugId : '85aa6df1-2acf-5388-bf27-8ff618276c68', desc: 'Alex Ngantuk', severity: 'medium', ass: 'mail@hacktiv8.com'}
    ]

    return(
      <div className="columns">
        <div className="column is-medium" id="listBugs">
          {list.map((result) => {
            return(
            <div className="card" key={result.BugId}>
              <header className="card-header">
                <p className="card-header-title">
                BugId: {result.BugId}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p>{result.desc}</p>
                  <span className="tag is-info">{result.severity}</span>
                  <p>Assigned To: {result.ass}</p>
                </div>
                <br />
                <small className="tag is-primary">Close</small>
              </div>
              <footer className="card-footer">
                <a className="is-warning card-footer-item">Close</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
            )
          })}

        <br />
        </div>
      </div>
    )
  }
}

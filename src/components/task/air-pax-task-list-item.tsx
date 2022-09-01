import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../adapters/task/targeting-api-client';
import TaskListItemTitleSection from './task-list-item-title-section';
import TaskListItemVoyageSection from './task-list-item-voyage-section';
import ViewTaskDetailsLink from './view-task-details-link';

class Props {
  task: Task;
  onTaskClaimed: (task: Task) => void;
  onTaskViewed: (task: Task) => void;
}

const AirPaxTaskListItem: FC<Props> = ({
  task,
  onTaskClaimed,
  onTaskViewed,
}) => {
  return (
    <div className="govuk-task-list-card" key={task.id}>
      <div className="card-container">
        <TaskListItemTitleSection
          task={task}
          risks={task.risks}
          onTaskClaimed={onTaskClaimed}
        />
        <TaskListItemVoyageSection movement={task.movement} />
        <section className="task-list--movement-info-section">
          <div className="govuk-grid-row">
            <div className="govuk-grid-item">
              <div>
                <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
                  Passenger
                </h3>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                  <li className="govuk-!-font-weight-bold">Ruocco</li>
                  <li className="govuk-!-font-weight-regular">Michael</li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                  <li className="govuk-!-font-weight-regular">Male</li>
                  <li className="govuk-!-font-weight-regular">15 Jun 1985</li>
                  <li className="govuk-!-font-weight-regular">GB</li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                  <li className="govuk-!-font-weight-regular">
                    1 Checked Bag, 15kg
                  </li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                  <li className="govuk-!-font-weight-regular">
                    Check-in 13:00
                  </li>
                  <li className="govuk-!-font-weight-regular">Seat 34A</li>
                </ul>
              </div>
            </div>

            <div className="govuk-grid-item vertical-dotted-line">
              <div>
                <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
                  Document
                </h3>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                  <li className="govuk-!-font-weight-bold">119039375 (GB)</li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                  <li className="govuk-!-font-weight-regular">
                    Valid from 27 Apr 2018
                  </li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                  <li className="govuk-!-font-weight-regular">
                    Expires 26 Apr 2023
                  </li>
                </ul>
                <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                  <li className="govuk-!-font-weight-regular">Issued by GB</li>
                </ul>
              </div>
            </div>

            <div className="govuk-grid-item vertical-dotted-line">
              <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
                Booking
              </h3>
              <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                <li className="govuk-!-font-weight-bold">LSV4UV</li>
              </ul>
              <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                <li className="govuk-!-font-weight-regular">09 Jun 2022</li>
              </ul>
              <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
                <li className="govuk-!-font-weight-regular">
                  a month before travel
                </li>
              </ul>
            </div>

            <div className="govuk-grid-item vertical-dotted-line">
              <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
                Co-travellers
              </h3>
              <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                Laura Ruocco
              </ul>
              <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
                Route
              </h3>
              <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
                <li className="govuk-!-font-weight-regular">
                  CDG - YYZ - YYC - LHR
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="task-list--target-indicator-section">
          <div className="govuk-grid-row">
            <div className="govuk-grid-item">
              <div className="govuk-grid-column">
                <ul className="govuk-list task-labels govuk-!-margin-top-2">
                  <li className="task-labels-item">
                    <strong className="govuk-!-font-weight-bold govuk-!-font-size-16">
                      Risk Score: 0
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="govuk-grid-column">
                <ul className="govuk-list task-labels govuk-!-margin-top-0">
                  <li className="task-labels-item">
                    <ul className="govuk-list item-list--bulleted">
                      <li className="govuk-!-font-weight-bold govuk-!-font-size-16">
                        1 indicator
                      </li>
                      <li className="threat-indicator-bullet govuk-!-font-size-16">
                        Infrequent trips made through port (person)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="govuk-grid-item task-link-container">
              <div>
                <ViewTaskDetailsLink task={task} onTaskViewed={onTaskViewed} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirPaxTaskListItem;

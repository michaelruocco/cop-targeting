import {
  MovementMode,
  MovementDirection,
  ThreatType,
  DepartureStatus,
  Task,
} from './task';
import { TaskStatus } from './task-status';
import { PersonRole } from './person';

export const stubTasks: Task[] = [
  {
    id: 'DEV-20220702-001',
    status: TaskStatus.New,
    assignee: null,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: 'd78c172e-4f57-4c96-854c-7fa3a5c084c6',
        content: 'task created',
        timestamp: new Date('2022-08-25T15:12:14.379226886Z'),
        userId: 'charles.okafor@digital.homeoffice.gov.uk',
      },
    ],
    movement: {
      /*  id: 'APIPNR:CMID=15148b83b4fbba770dad11348d1c9b-2002',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 6,
      booking: {
        reference: 'ABC123',
        type: null,
        paymentMethod: null,
        bookedAt: new Date('2022-02-24T13:22:21.123Z'),
        checkInAt: new Date('2022-11-20T16:32:33.123Z'),
        /*tickets: [
            { number: '1741815210698', type: 'ONE-WAY', price: '441.0 CAD' },
            { number: '1741815210698', type: 'ONE-WAY', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'ONE-WAY', price: '441.0 CAD' },
            { number: '1718705911248', type: 'ONE-WAY', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '96519614', location: 'YTZ, CA' },*/
      },
      journey: {
        id: 'AC0850',
        direction: MovementDirection.Inbound,
        arrival: {
          country: 'GB',
          location: 'LHR',
          time: new Date('2022-11-20T21:19:20Z'),
        },
        departure: {
          country: 'CA',
          location: 'YYC',
          time: new Date('2022-11-20T18:32:40Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 10000000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: { first: 'Michael', last: 'Ruocco', full: 'Michael Ruocco' },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1885-06-16T00:00:00Z'),
        gender: 'M',
        nationality: 'GB',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '14278943245',
          validFrom: new Date('2018-05-25T00:00:00Z'),
          expiry: new Date('2023-06-25T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '579419193A',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [
        {
          entitySearchUrl: null,
          name: { first: 'Laura', last: 'Ruocco', full: 'Laura Ruocco' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1988-06-09T00:00:00Z'),
          gender: 'F',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'Janice', last: 'Ruocco', full: 'Janice Ruocco' },
          role: PersonRole.Passenger,
          dateOfBirth: null,
          gender: 'F',
          nationality: null,
          document: null,
          movementStats: null,
          frequentFlyerNumber: '763381878A',
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'John', last: 'Ruocco', full: 'John Ruocco' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1967-04-30T00:00:00Z'),
          gender: 'M',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'Rebecca', last: 'Ruocco', full: 'Rebecca Ruocco' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1983-02-09T00:00:00Z'),
          gender: 'F',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'Paul', last: 'Holloway', full: 'Paul Holloway' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1985-05-30T00:00:00Z'),
          gender: 'M',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
      ],
      flight: {
        departureStatus: null,
        number: 'AC0850',
        operator: 'AC',
        seatNumber: '21C',
      },
      baggage: { numberOfCheckedBags: 1, weight: '19', tags: ['1234AB'] },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: { indicators: [], count: 0, score: 0 },
      matchedRules: [
        {
          id: 7808,
          /*name: 'PNR-Arrival Airport',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'arrivalLocations',
                operator: 'contains_any_of',
                value: '[lhr, man]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7844,
          /*name: 'Return Leg- Return',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'bookingType',
                operator: 'equal',
                value: 'RETURN',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7849,
          /*name: 'PNR-Risk-Rule',
            type: 'Both',
            priority: 'Tier 1',
            description: 'test pne',
            version: 1,*/
          abuseTypes: ['Class B&C Drugs inc. Cannabis'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
              {
                entity: 'Voyage',
                descriptor: 'arrivalLocation',
                operator: 'contains',
                value: 'LHR',
              },
            ],*/
        },
        {
          id: 7919,
          /*name: 'Generic rule - For trailer',
            type: 'Pre-load',
            priority: 'Tier 3',
            description: 'Eu velit commodo ill',
            version: 1,*/
          abuseTypes: [
            'International Trade inc. Missing Trader Intra-Community Fraud (MTIC)',
          ],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Trailer',
                descriptor: 'registrationNumber',
                operator: 'not_equal',
                value: 'AA005022',
              },
            ],*/
        },
        {
          id: 7963,
          /*name: 'Predict_Movement_Name_qwerty',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
            ],*/
        },
        {
          id: 8865,
          /*name: 'Duration of Whole trip',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Duration of Whole trip',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfWholeTrip',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
        {
          id: 8867,
          /*name: 'Duration of Stay -days',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfStay',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
      ],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-245',
              groupVersionNumber: 1,
              requestingOfficer: 'fe',
              intelligenceSource: 'fefe',
              category: 'A',*/
            threatType: 'Class A Drugs',
            /*pointOfContactMessage: 'fdvdfb',
              pointOfContact: 'bfb',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: [],
                    detail: 'other warning details',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Accompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Accompanied Freight qwerty',
                },
                {
                  id: 300,
                  reference: '2022-300',
                  category: 'B',
                  warning: { status: 'NO', types: [], detail: null },
                  indicatorMatches: [
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'GB09NFD',
                    },
                  ],
                  description: 'GB09NFD',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 2,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-002',
    status: TaskStatus.New,
    assignee: null,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '0582b0e5-fc5a-4040-ae36-a5fa701f3154',
        content: 'task created',
        timestamp: new Date('2022-08-25T15:12:43.846544253Z'),
        userId: 'charles.okafor@digital.homeoffice.gov.uk',
      },
    ],
    movement: {
      /*id: 'APIPNR:CMID=15148b83b4fbba770dad11348d1c9b08-2003',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 5,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: new Date('2021-01-24T17:42:37.123Z'),
        checkInAt: null,
        /*tickets: [
            { number: '1718705911248', type: 'ONE-WAY', price: '441.0 CAD' },
            { number: '1718705911248', type: 'ONE-WAY', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '96519614', location: 'YTZ, CA' },*/
      },
      journey: {
        id: 'AC0850',
        direction: MovementDirection.Inbound,
        arrival: {
          country: 'GB',
          location: 'LHR',
          time: new Date('2018-10-03T21:19:20Z'),
        },
        departure: {
          country: 'CA',
          location: 'YYC',
          time: new Date('2018-10-03T18:32:40Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 10000000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: { first: 'GEMMA', last: 'MESTA', full: 'GEMMA MESTA' },
        role: PersonRole.Crew,
        dateOfBirth: new Date('1878-01-19T00:00:00Z'),
        gender: null,
        nationality: null,
        document: null,
        movementStats: null,
        frequentFlyerNumber: '579419193A',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [
        {
          entitySearchUrl: null,
          name: { first: null, last: 'MAUSSER', full: 'MAUSSER' },
          role: PersonRole.Crew,
          dateOfBirth: new Date('1970-04-14T00:00:00Z'),
          gender: 'F',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'SHARON', last: 'MAUSSER', full: 'SHARON MAUSSER' },
          role: PersonRole.Crew,
          dateOfBirth: null,
          gender: null,
          nationality: null,
          document: null,
          movementStats: null,
          frequentFlyerNumber: '763381878A',
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: null, last: null, full: null },
          role: PersonRole.Crew,
          dateOfBirth: new Date('1967-06-10T00:00:00Z'),
          gender: 'M',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: null, last: null, full: null },
          role: PersonRole.Crew,
          dateOfBirth: new Date('1967-06-10T00:00:00Z'),
          gender: 'M',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
      ],
      flight: {
        departureStatus: DepartureStatus.BookedPassenger,
        number: 'AC0850',
        operator: 'AC',
        seatNumber: null,
      },
      baggage: { numberOfCheckedBags: null, weight: null, tags: [] },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: { indicators: [], count: 0, score: 0 },
      matchedRules: [
        {
          id: 7808,
          /*name: 'PNR-Arrival Airport',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'arrivalLocations',
                operator: 'contains_any_of',
                value: '[lhr, man]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7844,
          /*name: 'Return Leg- Return',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'bookingType',
                operator: 'equal',
                value: 'RETURN',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7849,
          /*name: 'PNR-Risk-Rule',
            type: 'Both',
            priority: 'Tier 1',
            description: 'test pne',
            version: 1,*/
          abuseTypes: ['Class B&C Drugs inc. Cannabis'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
              {
                entity: 'Voyage',
                descriptor: 'arrivalLocation',
                operator: 'contains',
                value: 'LHR',
              },
            ],*/
        },
        {
          id: 7919,
          /*name: 'Generic rule - For trailer',
            type: 'Pre-load',
            priority: 'Tier 3',
            description: 'Eu velit commodo ill',
            version: 1,*/
          abuseTypes: [
            'International Trade inc. Missing Trader Intra-Community Fraud (MTIC)',
          ],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Trailer',
                descriptor: 'registrationNumber',
                operator: 'not_equal',
                value: 'AA005022',
              },
            ],*/
        },
        {
          id: 7963,
          /*name: 'Predict_Movement_Name_qwerty',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
            ],*/
        },
        {
          id: 8865,
          /*name: 'Duration of Whole trip',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Duration of Whole trip',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfWholeTrip',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
        {
          id: 8867,
          /*name: 'Duration of Stay -days',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfStay',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
      ],
      matchedSelectorGroups: {
        groups: [],
        totalNumberOfSelectors: 0,
      },
      highestThreatLevel: { type: ThreatType.Rule, value: 'Tier 1' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-003',
    status: TaskStatus.New,
    assignee: null,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '4aff96cd-882d-4db9-9e99-4d9d82bc65b0',
        content: 'task created',
        timestamp: new Date('2022-08-25T15:13:23.655805008Z'),
        userId: 'acceptance-cerberus-user@system.local',
      },
    ],
    movement: {
      /*id: 'APIPNR:CMID=15148b83b4fbba770dad11348d1c76356',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 2,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: new Date('2021-01-24T17:42:37.123Z'),
        checkInAt: null,
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '96519614', location: 'YTZ, CA' },*/
      },
      journey: {
        id: 'AC0850',
        direction: MovementDirection.Inbound,
        arrival: {
          country: 'GB',
          location: 'LHR',
          time: new Date('2018-10-03T21:19:20Z'),
        },
        departure: {
          country: 'CA',
          location: 'YYC',
          time: new Date('2018-10-03T18:32:40Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 10000000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: { first: 'GEMMA', last: 'MESTA', full: 'GEMMA MESTA' },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1878-01-19T00:00:00Z'),
        gender: null,
        nationality: null,
        document: null,
        movementStats: null,
        frequentFlyerNumber: '579419193A',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [
        {
          entitySearchUrl: null,
          name: { first: null, last: 'MAUSSER', full: 'MAUSSER' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1970-04-14T00:00:00Z'),
          gender: 'F',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'SHARON', last: 'MAUSSER', full: 'SHARON MAUSSER' },
          role: PersonRole.Passenger,
          dateOfBirth: null,
          gender: null,
          nationality: null,
          document: null,
          movementStats: null,
          frequentFlyerNumber: '763381878A',
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: null, last: null, full: null },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1967-06-10T00:00:00Z'),
          gender: 'M',
          nationality: null,
          document: {
            entitySearchUrl: null,
            type: 'UNKNOWN',
            number: null,
            validFrom: null,
            expiry: null,
            countryOfIssue: null,
          },
          movementStats: null,
          frequentFlyerNumber: null,
          ssrCodes: ['DOCS', 'AUTH'],
        },
      ],
      flight: {
        departureStatus: DepartureStatus.CheckedIn,
        number: 'AC0850',
        operator: 'AC',
        seatNumber: null,
      },
      baggage: { numberOfCheckedBags: null, weight: null, tags: [] },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: { indicators: [], count: 0, score: 0 },
      matchedRules: [
        {
          id: 7808,
          /*name: 'PNR-Arrival Airport',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'arrivalLocations',
                operator: 'contains_any_of',
                value: '[lhr, man]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7844,
          /*name: 'Return Leg- Return',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'bookingType',
                operator: 'equal',
                value: 'RETURN',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7849,
          /*name: 'PNR-Risk-Rule',
            type: 'Both',
            priority: 'Tier 1',
            description: 'test pne',
            version: 1,*/
          abuseTypes: ['Class B&C Drugs inc. Cannabis'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
              {
                entity: 'Voyage',
                descriptor: 'arrivalLocation',
                operator: 'contains',
                value: 'LHR',
              },
            ],*/
        },
        {
          id: 7919,
          /*name: 'Generic rule - For trailer',
            type: 'Pre-load',
            priority: 'Tier 3',
            description: 'Eu velit commodo ill',
            version: 1,*/
          abuseTypes: [
            'International Trade inc. Missing Trader Intra-Community Fraud (MTIC)',
          ],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Trailer',
                descriptor: 'registrationNumber',
                operator: 'not_equal',
                value: 'AA005022',
              },
            ],*/
        },
        {
          id: 7963,
          /*name: 'Predict_Movement_Name_qwerty',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
            ],*/
        },
        {
          id: 8865,
          /*name: 'Duration of Whole trip',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Duration of Whole trip',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfWholeTrip',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
        {
          id: 8867,
          /*name: 'Duration of Stay -days',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfStay',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
      ],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-245',
              groupVersionNumber: 1,
              requestingOfficer: 'fe',
              intelligenceSource: 'fefe',
              category: 'A',*/
            threatType: 'Class A Drugs',
            /*pointOfContactMessage: 'fdvdfb',
              pointOfContact: 'bfb',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: [],
                    detail: 'other warning details',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Accompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Accompanied Freight qwerty',
                },
                {
                  id: 300,
                  reference: '2022-300',
                  category: 'B',
                  warning: { status: 'NO', types: [], detail: null },
                  indicatorMatches: [
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'GB09NFD',
                    },
                  ],
                  description: 'GB09NFD',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 2,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-004',
    status: TaskStatus.New,
    assignee: null,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '97e8cb26-1009-44cd-a702-ab986597495a',
        content: 'task created',
        timestamp: new Date('2022-08-26T14:19:52.642018452Z'),
        userId: 'cypressuser-cerberus@lodev.xyz',
      },
    ],
    movement: {
      /*id: 'AIRPAX_438002:CMID=TEST',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 4,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: null,
        checkInAt: new Date('2019-07-20T16:43:35Z'),
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '890534932', location: 'LHR, GB' },*/
      },
      journey: {
        id: 'BA0103',
        direction: null,
        arrival: {
          country: null,
          location: 'YYC',
          time: new Date('2019-07-21T18:35:00Z'),
        },
        departure: {
          country: null,
          location: 'LHR',
          time: new Date('2019-07-21T16:40:00Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 6900000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: {
          first: 'Micky Mouse',
          last: 'Auto Test',
          full: 'Auto Test Micky Mouse',
        },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1976-12-20T00:00:00Z'),
        gender: 'M',
        nationality: 'AU',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '119039375',
          validFrom: new Date('2018-04-27T00:00:00Z'),
          expiry: new Date('2023-04-26T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '680419104BA',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [
        {
          entitySearchUrl: null,
          name: { first: 'Sharon', last: 'HawkGirl', full: 'Sharon HawkGirl' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1977-02-28T00:00:00Z'),
          gender: 'G',
          nationality: 'FR',
          document: {
            entitySearchUrl: null,
            type: 'PASSPORT',
            number: '119039375',
            validFrom: new Date('2018-04-27T00:00:00Z'),
            expiry: new Date('2023-04-26T00:00:00Z'),
            countryOfIssue: 'GB',
          },
          movementStats: null,
          frequentFlyerNumber: '680412568BA',
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: { first: 'Shazam', last: 'Superman', full: 'Shazam Superman' },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1976-12-20T00:00:00Z'),
          gender: 'M',
          nationality: 'AU',
          document: {
            entitySearchUrl: null,
            type: 'PASSPORT',
            number: '119039375',
            validFrom: new Date('2018-04-27T00:00:00Z'),
            expiry: new Date('2023-04-26T00:00:00Z'),
            countryOfIssue: 'GB',
          },
          movementStats: null,
          frequentFlyerNumber: '908719104BA',
          ssrCodes: ['DOCS', 'AUTH'],
        },
        {
          entitySearchUrl: null,
          name: {
            first: 'ZUES CARLO',
            last: 'BATZ STOUP',
            full: 'ZUES CARLO BATZ STOUP',
          },
          role: PersonRole.Passenger,
          dateOfBirth: new Date('1976-12-10T00:00:00Z'),
          gender: 'M',
          nationality: 'GB',
          document: {
            entitySearchUrl: null,
            type: 'PASSPORT',
            number: '119039375',
            validFrom: new Date('2018-04-27T00:00:00Z'),
            expiry: new Date('2023-04-26T00:00:00Z'),
            countryOfIssue: 'GB',
          },
          movementStats: null,
          frequentFlyerNumber: '680419104BA',
          ssrCodes: ['DOCS', 'AUTH'],
        },
      ],
      flight: {
        departureStatus: DepartureStatus.DepartureException,
        number: 'BA0103',
        operator: 'BA',
        seatNumber: '34A',
      },
      baggage: {
        numberOfCheckedBags: 6,
        weight: '100kg',
        tags: ['739238', '739239', '739240', '739241', '739242', '739243'],
      },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: {
        indicators: [
          {
            id: 46,
            name: 'PASSENGER-INFREQUENT-PORT-USE',
            description: 'Infrequent trips made through port (person)',
            score: 5,
          },
        ],
        count: 1,
        score: 5,
      },
      matchedRules: [],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-218',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 51,
                  reference: '2021-10',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Organisation',
                      descriptor: 'telephone',
                      operator: 'equal',
                      value: '01234 56723737',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight 01234 56723737',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-217',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 225,
                  reference: '2022-100',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'DK-45678',
                    },
                  ],
                  description: 'DK-45678',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-227',
              groupVersionNumber: 1,
              requestingOfficer:
                'Velit in sunt aliquip voluptate tempore consectetur',
              intelligenceSource:
                'Qui adipisci consectetur ullam consequatur a aspernatur in',
              category: 'C',*/
            threatType: 'Alcohol',
            /*pointOfContactMessage:
                'Blanditiis consectetur impedit omnis veniam veniam quibusdam ad eiusmod et consequatur fuga Fugiat nesciunt tenetur expedita aliquam',
              pointOfContact:
                'Dolores est qui laboriosam velit tenetur aut sit laborum Temporibus distinctio Aut hic non autem',
              inboundActionCode: 'Worthy of attention',
              outboundActionCode: 'Monitor only',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 245,
                  reference: '2022-245',
                  category: 'C',
                  warning: {
                    status: 'NO',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Person',
                      descriptor: 'familyName',
                      operator: 'equal',
                      value: 'TURNER',
                    },
                  ],
                  description: 'TURNER',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-216',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 278,
                  reference: '2021-278',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'ABC123',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight ABC123',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-215',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION', 'SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Unaccompanied Freight qwerty',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 5,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-005',
    status: TaskStatus.New,
    assignee: null,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: 'bb79a431-29d7-4dd9-9260-c7a465a000bf',
        content: 'task created',
        timestamp: new Date('2022-08-25T17:15:37.782320462Z'),
        userId: 'cypressuser-cerberus@lodev.xyz',
      },
    ],
    movement: {
      /*id: 'AIRPAX_872492:CMID=TEST',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'individual',
      groupSize: 1,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: null,
        checkInAt: new Date('2019-07-20T16:43:35Z'),
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '890534932', location: 'LHR, GB' },*/
      },
      journey: {
        id: 'BA0103',
        direction: null,
        arrival: {
          country: null,
          location: 'YYC',
          time: new Date('2019-07-21T18:35:00Z'),
        },
        departure: {
          country: null,
          location: 'LHR',
          time: new Date('2019-07-21T16:40:00Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 6900000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: {
          first: 'Micky Mouse',
          last: 'Auto Test',
          full: 'Auto Test Micky Mouse',
        },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1976-12-20T00:00:00Z'),
        gender: 'M',
        nationality: 'AU',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '119039375',
          validFrom: new Date('2018-04-27T00:00:00Z'),
          expiry: new Date('2023-04-26T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '680419104BA',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [],
      flight: {
        departureStatus: DepartureStatus.DepartureConfirmed,
        number: 'BA0103',
        operator: 'BA',
        seatNumber: '34A',
      },
      baggage: {
        numberOfCheckedBags: 6,
        weight: '100kg',
        tags: ['739238', '739239', '739240', '739241', '739242', '739243'],
      },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: {
        indicators: [
          {
            id: 46,
            name: 'PASSENGER-INFREQUENT-PORT-USE',
            description: 'Infrequent trips made through port (person)',
            score: 5,
          },
        ],
        count: 1,
        score: 5,
      },
      matchedRules: [],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-218',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 51,
                  reference: '2021-10',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Organisation',
                      descriptor: 'telephone',
                      operator: 'equal',
                      value: '01234 56723737',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight 01234 56723737',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 1,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-006',
    status: TaskStatus.InProgress,
    assignee: 'michael.ruocco@digital.homeoffice.gov.uk',
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '1b43e520-40cd-448e-94b9-8db8b8a35476',
        content: 'task created',
        timestamp: new Date('2022-08-25T17:18:28.225671844Z'),
        userId: 'cypressuser-cerberus@lodev.xyz',
      },
      {
        id: '43c7b8bf-b96f-4963-91a6-c74c5b0f7c3f',
        content: 'task claimed',
        timestamp: new Date('2022-08-25T18:19:29.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
    ],
    movement: {
      /*id: 'AIRPAX_841661:CMID=TEST',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 4,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: null,
        checkInAt: new Date('2019-07-20T16:43:35Z'),
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '890534932', location: 'LHR, GB' },*/
      },
      journey: {
        id: 'BA0103',
        direction: null,
        arrival: {
          country: null,
          location: 'YYC',
          time: new Date('2019-07-21T18:35:00Z'),
        },
        departure: {
          country: null,
          location: 'LHR',
          time: new Date('2019-07-21T16:40:00Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 6900000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: {
          first: 'Micky Mouse',
          last: 'Auto Test',
          full: 'Auto Test Micky Mouse',
        },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1976-12-20T00:00:00Z'),
        gender: 'M',
        nationality: 'AU',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '119039375',
          validFrom: new Date('2018-04-27T00:00:00Z'),
          expiry: new Date('2023-04-26T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '680419104BA',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [],
      flight: {
        departureStatus: DepartureStatus.DepartureConfirmed,
        number: 'BA0103',
        operator: 'BA',
        seatNumber: '34A',
      },
      baggage: {
        numberOfCheckedBags: 6,
        weight: '100kg',
        tags: ['739238', '739239', '739240', '739241', '739242', '739243'],
      },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: {
        indicators: [
          {
            id: 46,
            name: 'PASSENGER-INFREQUENT-PORT-USE',
            description: 'Infrequent trips made through port (person)',
            score: 5,
          },
        ],
        count: 1,
        score: 5,
      },
      matchedRules: [],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-218',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 51,
                  reference: '2021-10',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Organisation',
                      descriptor: 'telephone',
                      operator: 'equal',
                      value: '01234 56723737',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight 01234 56723737',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-217',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 225,
                  reference: '2022-100',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'DK-45678',
                    },
                  ],
                  description: 'DK-45678',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-227',
              groupVersionNumber: 1,
              requestingOfficer:
                'Velit in sunt aliquip voluptate tempore consectetur',
              intelligenceSource:
                'Qui adipisci consectetur ullam consequatur a aspernatur in',
              category: 'C',*/
            threatType: 'Alcohol',
            /*pointOfContactMessage:
                'Blanditiis consectetur impedit omnis veniam veniam quibusdam ad eiusmod et consequatur fuga Fugiat nesciunt tenetur expedita aliquam',
              pointOfContact:
                'Dolores est qui laboriosam velit tenetur aut sit laborum Temporibus distinctio Aut hic non autem',
              inboundActionCode: 'Worthy of attention',
              outboundActionCode: 'Monitor only',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 245,
                  reference: '2022-245',
                  category: 'C',
                  warning: {
                    status: 'NO',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Person',
                      descriptor: 'familyName',
                      operator: 'equal',
                      value: 'TURNER',
                    },
                  ],
                  description: 'TURNER',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-216',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 278,
                  reference: '2021-278',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'ABC123',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight ABC123',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-215',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION', 'SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Unaccompanied Freight qwerty',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 5,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-007',
    status: TaskStatus.Issued,
    assignee: `michael.ruocco@digital.homeoffice.gov.uk`,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '62a0a965-80fb-43ff-875f-20ec14ca1cbc',
        content: 'task created',
        timestamp: new Date('2022-08-25T19:11:21.225671844Z'),
        userId: 'cypressuser-cerberus@lodev.xyz',
      },
      {
        id: '25720f2e-b7c9-4a3b-8a07-b56cbed25529',
        content: 'task claimed',
        timestamp: new Date('2022-08-25T20:12:22.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
      {
        id: 'aa3138fa-647f-4357-af40-6d6768d70661',
        content: 'task issued',
        timestamp: new Date('2022-08-25T21:13:23.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
    ],
    movement: {
      /*id: 'AIRPAX_140959:CMID=TEST',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'group',
      groupSize: 4,
      booking: {
        reference: 'LSV4UV',
        type: null,
        paymentMethod: null,
        bookedAt: null,
        checkInAt: new Date('2019-07-20T16:43:35Z'),
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: null,
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '890534932', location: 'LHR, GB' },*/
      },
      journey: {
        id: 'BA0103',
        direction: null,
        arrival: {
          country: null,
          location: 'YYC',
          time: new Date('2019-07-21T18:35:00Z'),
        },
        departure: {
          country: null,
          location: 'LHR',
          time: new Date('2019-07-21T16:40:00Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 6900000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: {
          first: 'Micky Mouse',
          last: 'Auto Test',
          full: 'Auto Test Micky Mouse',
        },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1976-12-20T00:00:00Z'),
        gender: 'M',
        nationality: 'AU',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '119039375',
          validFrom: new Date('2018-04-27T00:00:00Z'),
          expiry: new Date('2023-04-26T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '680419104BA',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [],
      flight: {
        departureStatus: DepartureStatus.DepartureConfirmed,
        number: 'BA0103',
        operator: 'BA',
        seatNumber: '34A',
      },
      baggage: {
        numberOfCheckedBags: 6,
        weight: '100kg',
        tags: ['739238', '739239', '739240', '739241', '739242', '739243'],
      },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: {
        indicators: [
          {
            id: 46,
            name: 'PASSENGER-INFREQUENT-PORT-USE',
            description: 'Infrequent trips made through port (person)',
            score: 5,
          },
        ],
        count: 1,
        score: 5,
      },
      matchedRules: [],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-218',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 51,
                  reference: '2021-10',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Organisation',
                      descriptor: 'telephone',
                      operator: 'equal',
                      value: '01234 56723737',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight 01234 56723737',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-217',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 225,
                  reference: '2022-100',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'DK-45678',
                    },
                  ],
                  description: 'DK-45678',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-227',
              groupVersionNumber: 1,
              requestingOfficer:
                'Velit in sunt aliquip voluptate tempore consectetur',
              intelligenceSource:
                'Qui adipisci consectetur ullam consequatur a aspernatur in',
              category: 'C',*/
            threatType: 'Alcohol',
            /*pointOfContactMessage:
                'Blanditiis consectetur impedit omnis veniam veniam quibusdam ad eiusmod et consequatur fuga Fugiat nesciunt tenetur expedita aliquam',
              pointOfContact:
                'Dolores est qui laboriosam velit tenetur aut sit laborum Temporibus distinctio Aut hic non autem',
              inboundActionCode: 'Worthy of attention',
              outboundActionCode: 'Monitor only',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 245,
                  reference: '2022-245',
                  category: 'C',
                  warning: {
                    status: 'NO',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Person',
                      descriptor: 'familyName',
                      operator: 'equal',
                      value: 'TURNER',
                    },
                  ],
                  description: 'TURNER',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-216',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 278,
                  reference: '2021-278',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'ABC123',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight ABC123',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-215',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION', 'SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Unaccompanied Freight qwerty',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 5,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
  {
    id: 'DEV-20220702-008',
    status: TaskStatus.Complete,
    assignee: `michael.ruocco@digital.homeoffice.gov.uk`,
    relisted: false,
    latestVersionNumber: 1,
    notes: [
      {
        id: '62a0a965-80fb-43ff-875f-20ec14ca1cbc',
        content: 'task created',
        timestamp: new Date('2022-08-25T19:11:21.225671844Z'),
        userId: 'cypressuser-cerberus@lodev.xyz',
      },
      {
        id: '25720f2e-b7c9-4a3b-8a07-b56cbed25529',
        content: 'task claimed',
        timestamp: new Date('2022-08-25T20:12:22.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
      {
        id: 'aa3138fa-647f-4357-af40-6d6768d70661',
        content: 'task issued',
        timestamp: new Date('2022-08-25T21:13:23.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
      {
        id: 'aa3138fa-647f-4357-af40-6d6768d70661',
        content: 'task dismissed',
        timestamp: new Date('2022-08-25T21:13:23.225671844Z'),
        userId: 'michael.ruocco@digital.homeoffice.gov.uk',
      },
    ],
    movement: {
      /*id: 'AIRPAX_156299:CMID=TEST',
        status: 'PRE_ARRIVAL',*/
      mode: MovementMode.AirPassenger,
      description: 'individual',
      groupSize: 1,
      booking: {
        reference: 'LSV4UV',
        type: 'Online',
        paymentMethod: 'CC',
        bookedAt: new Date('2022-06-09T10:00:00Z'),
        checkInAt: new Date('2022-06-12T13:00:00Z'),
        /*tickets: [
            { number: '1741815210698', type: 'RETURN', price: '441.0 CAD' },
            { number: '1741815210698', type: 'RETURN', price: '1095.24 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '441.0 CAD' },
            { number: '1718705911248', type: 'RETURN', price: '1095.24 CAD' },
          ],
          country: 'GB',
          payments: [
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
            {
              amount: 2190.48,
              card: {
                number: '30XXXXXXXXXXX63X',
                expiry: '2020-10-01T00:00:00Z',
              },
            },
          ],
          agent: { iata: '890534932', location: 'LHR, GB' },*/
      },
      journey: {
        id: 'BA0103',
        direction: null,
        arrival: {
          country: null,
          location: 'YYC',
          time: new Date('2022-07-10T15:30:01Z'),
        },
        departure: {
          country: null,
          location: 'LHR',
          time: new Date('2022-07-10T12:30:01Z'),
        },
        route: ['CDG', 'YYZ', 'YYC', 'LHR'],
        itinerary: [
          {
            id: 'AC0850',
            arrival: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T13:05:00Z'),
            },
            departure: {
              country: 'FR',
              location: 'CDG',
              time: new Date('2018-10-03T11:00:00Z'),
            },
            duration: 7500000,
          },
          {
            id: 'BD0998',
            arrival: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:16:00Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYZ',
              time: new Date('2018-10-03T16:05:00Z'),
            },
            duration: 7860000,
          },
          {
            id: 'XZ0123',
            arrival: {
              country: 'GB',
              location: 'LHR',
              time: new Date('2018-10-03T21:19:20Z'),
            },
            departure: {
              country: 'CA',
              location: 'YYC',
              time: new Date('2018-10-03T18:32:40Z'),
            },
            duration: 10000000,
          },
        ],
        duration: 10800000,
      },
      //vessel: null,
      person: {
        entitySearchUrl: null,
        name: {
          first: 'Testing GivenName',
          last: 'Testing FamilyName',
          full: 'FamilyName GivenName',
        },
        role: PersonRole.Passenger,
        dateOfBirth: new Date('1976-12-30T00:00:00Z'),
        gender: 'F',
        nationality: 'AU',
        document: {
          entitySearchUrl: null,
          type: 'PASSPORT',
          number: '119039375',
          validFrom: new Date('2018-04-27T00:00:00Z'),
          expiry: new Date('2023-04-26T00:00:00Z'),
          countryOfIssue: 'GB',
        },
        movementStats: null,
        frequentFlyerNumber: '680419104BA',
        ssrCodes: ['DOCS', 'AUTH'],
      },
      otherPersons: [],
      flight: {
        departureStatus: DepartureStatus.DepartureConfirmed,
        number: 'BA0103',
        operator: 'BA',
        seatNumber: '34A',
      },
      baggage: { numberOfCheckedBags: 1, weight: '23kg', tags: ['739238'] },
      /*vehicle: null,
        trailer: null,
        goods: null,
        haulier: null,
        account: null,
        booker: null,
        occupants: null,*/
    },
    risks: {
      targetingIndicators: {
        indicators: [
          {
            id: 46,
            name: 'PASSENGER-INFREQUENT-PORT-USE',
            description: 'Infrequent trips made through port (person)',
            score: 5,
          },
          {
            id: 47,
            name: 'PAID-BY-CASH',
            description: 'Paid by cash',
            score: 10,
          },
        ],
        count: 2,
        score: 15,
      },
      matchedRules: [
        {
          id: 7808,
          /*name: 'PNR-Arrival Airport',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'arrivalLocations',
                operator: 'contains_any_of',
                value: '[lhr, man]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7844,
          /*name: 'Return Leg- Return',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'bookingType',
                operator: 'equal',
                value: 'RETURN',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
            ],*/
        },
        {
          id: 7849,
          /*name: 'PNR-Risk-Rule',
            type: 'Both',
            priority: 'Tier 1',
            description: 'test pne',
            version: 1,*/
          abuseTypes: ['Class B&C Drugs inc. Cannabis'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value: '[Air Passenger]',
              },
              {
                entity: 'Voyage',
                descriptor: 'arrivalLocation',
                operator: 'contains',
                value: 'LHR',
              },
            ],*/
        },
        {
          id: 7919,
          /*name: 'Generic rule - For trailer',
            type: 'Pre-load',
            priority: 'Tier 3',
            description: 'Eu velit commodo ill',
            version: 1,*/
          abuseTypes: [
            'International Trade inc. Missing Trader Intra-Community Fraud (MTIC)',
          ],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Trailer',
                descriptor: 'registrationNumber',
                operator: 'not_equal',
                value: 'AA005022',
              },
            ],*/
        },
        {
          id: 7963,
          /*name: 'Predict_Movement_Name_qwerty',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
              {
                entity: 'Movement',
                descriptor: 'name',
                operator: 'not_equal',
                value: 'qwerty',
              },
            ],*/
        },
        {
          id: 8865,
          /*name: 'Duration of Whole trip',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Duration of Whole trip',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfWholeTrip',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
        {
          id: 8867,
          /*name: 'Duration of Stay -days',
            type: 'Both',
            priority: 'Tier 1',
            description: 'Test',
            version: 1,*/
          abuseTypes: ['Alcohol'],
          /*indicatorMatches: [
              {
                entity: 'Booking',
                descriptor: 'durationOfStay',
                operator: 'between',
                value: '[1, 70]',
              },
              {
                entity: 'Message',
                descriptor: 'mode',
                operator: 'in',
                value:
                  '[Air Freight, Air Passenger, Fast Parcels, RORO Accompanied Freight, RORO Tourist, RORO Unaccompanied Freight]',
              },
            ],*/
        },
      ],
      matchedSelectorGroups: {
        groups: [
          {
            /*groupReference: 'SR-218',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 51,
                  reference: '2021-10',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Organisation',
                      descriptor: 'telephone',
                      operator: 'equal',
                      value: '01234 56723737',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight 01234 56723737',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-217',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 225,
                  reference: '2022-100',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'DK-45678',
                    },
                  ],
                  description: 'DK-45678',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-227',
              groupVersionNumber: 1,
              requestingOfficer:
                'Velit in sunt aliquip voluptate tempore consectetur',
              intelligenceSource:
                'Qui adipisci consectetur ullam consequatur a aspernatur in',
              category: 'C',*/
            threatType: 'Alcohol',
            /*pointOfContactMessage:
                'Blanditiis consectetur impedit omnis veniam veniam quibusdam ad eiusmod et consequatur fuga Fugiat nesciunt tenetur expedita aliquam',
              pointOfContact:
                'Dolores est qui laboriosam velit tenetur aut sit laborum Temporibus distinctio Aut hic non autem',
              inboundActionCode: 'Worthy of attention',
              outboundActionCode: 'Monitor only',
              notes: 'notes',
              creator: 'user',
              selectors: [
                {
                  id: 245,
                  reference: '2022-245',
                  category: 'C',
                  warning: {
                    status: 'NO',
                    types: ['OTHER'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Person',
                      descriptor: 'familyName',
                      operator: 'equal',
                      value: 'TURNER',
                    },
                  ],
                  description: 'TURNER',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-216',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'No action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 278,
                  reference: '2021-278',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value:
                        'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Vehicle',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'ABC123',
                    },
                  ],
                  description:
                    'RORO Accompanied Freight,RORO Tourist,RORO Unaccompanied Freight ABC123',
                },
              ],*/
          },
          {
            /*groupReference: 'SR-215',
              groupVersionNumber: 1,
              requestingOfficer: 'Tester',
              intelligenceSource: 'intel source',
              category: 'A',*/
            threatType: 'National Security at the Border',
            /*pointOfContactMessage: 'selector for auto testing',
              pointOfContact: 'Point Of Contact Testing',
              inboundActionCode: 'action required',
              outboundActionCode: 'No action required',
              notes: 'notes testing',
              creator: 'test user',
              selectors: [
                {
                  id: 279,
                  reference: '2021-279',
                  category: 'A',
                  warning: {
                    status: 'YES',
                    types: ['CONTAGION', 'SELF_HARM'],
                    detail: 'Warning details would be shown here',
                  },
                  indicatorMatches: [
                    {
                      entity: 'Message',
                      descriptor: 'mode',
                      operator: 'in',
                      value: 'RORO Unaccompanied Freight',
                    },
                    {
                      entity: 'Trailer',
                      descriptor: 'registrationNumber',
                      operator: 'equal',
                      value: 'qwerty',
                    },
                  ],
                  description: 'RORO Unaccompanied Freight qwerty',
                },
              ],*/
          },
        ],
        totalNumberOfSelectors: 5,
      },
      highestThreatLevel: { type: ThreatType.Selector, value: 'A' },
    },
    //versions: [],
  },
];

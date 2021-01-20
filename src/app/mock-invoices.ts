import {Invoice} from './invoice';

export const INVOICES: Invoice[] = [
{ id: '001', title: 'invoice 001', amount: 33, creatorId: 1000125, debtor: 'Jeanny', state: 'booked'},
{ id: '002', title: 'invoice 002', amount: 55, creatorId: 1000125, debtor: 'Simon', state: 'paid'},
{ id: '003', title: 'invoice 003', amount: 56, creatorId: 1000125, debtor: 'Jack', state: 'booked'},
{ id: '004', title: 'invoice 004', amount: 13, creatorId: 1000125, debtor: 'Ralf', state: 'paid'},
{ id: '005', title: 'invoice 005', amount: 9.22, creatorId: 1000125, debtor: 'Simon', state: 'expired'},
{ id: '006', title: 'invoice 006', amount: 16, creatorId: 1000125, debtor: 'Jeanny', state: 'booked'},
{ id: '007', title: 'invoice 007', amount: 99, creatorId: 1000125, debtor: 'Rick', state: 'paid'},
{ id: '008', title: 'invoice 008', amount: 15.03, creatorId: 1000125, debtor: 'Pol', state: 'paid'},
{ id: '009', title: 'invoice 009', amount: 36, creatorId: 1000125, debtor: 'Dubois', state: 'booked'},
{ id: '0010', title: 'invoice 0010', amount: 12, creatorId: 1000125, debtor: 'Simon', state: 'paid'},
{ id: '0011', title: 'invoice 0011', amount: 10, creatorId: 1000125, debtor: 'Simon', state: 'paid'},
];

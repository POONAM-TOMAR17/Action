import { TableContainerType } from '@components/libs/typeInterface';
import React from 'react';

interface ITableContainerProps {
  people: TableContainerType[];
}

const people = [
  {
    no: '1',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'BEVEL PROTRACTOR L.C. 5 Minutes of Arc',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'to 0° – 90° – 0°',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.13 min of arc',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ANGLE GAUGE BLOCK SET'
  },
  {
    no: '2',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'BORE GAUGE (2-POINT,TRANSMISSION ACCURACY ONLY)',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 2 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: 'up to 2 mm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING DIAL GAUGE TESTER'
  },
  {
    no: '3',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'CALIPERS(DIGITAL / DIAL / VERNIER) L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 1000 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '11.6µm',
    role2: '',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING CALIPER CHECKER & GAUGE BLOCK SET'
  },
  {
    no: '4',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'COATING THICKNESS GAUGE L.C. 0.1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 100 µm',
    range2: '100 µm to 1500 µm',
    range3: '1 mm to 12 mm',
    range4: '',
    range5: '',
    role1: '3.4 µm',
    role2: '4.6 µm ',
    role3: '13.6 µm ',
    role4: ' ',
    role5: ' ',
    method: 'USING STANDARD FOILS'
  },
  {
    no: '5',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'COMBINATION SET / ANGLE PROTRACTOR L.C. 1 Degree',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '0° to 180°',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '35 min of arc',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ANGLE GAUGE BLOCK SET'
  },
  {
    no: '6',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DEPTH GAUGES (DIGITAL / DIAL / VERNIER) L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 450 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '19.7 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING CALIPER CHECKER & GAUGE BLOCK SE'
  },
  {
    no: '7',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DEPTH MICROMETER L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '>100 mm to 300 mm',
    range2: 'up to 100 mm',
    range3: '',
    range4: '',
    range5: '',
    role1: '>9.5 µm',
    role2: '7.5 µm ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET & ACCESSOREIS'
  },
  {
    no: '8',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DIAL GAUGE CALIBRATOR L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 25 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '2.1 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '9',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DIAL / DIGITAL INDICATOR (PLUNGER TYPE) L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 25 mm',
    range2: 'Up to 50 mm',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.2 µm',
    role2: ' 10.2 µm',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING DIAL GAUGE TESTER,GAUGE BLOCK SET & COMPARATOR STAND'
  },
  {
    no: '10',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DIGITAL / DIAL THICKNESS GAUGE L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 12 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.2 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET'
  },
  {
    no: '11',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'DIGITAL / DIAL THICKNESS GAUGE L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 25 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '7.0 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET'
  },
  {
    no: '12',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'ELECTRONIC COMPARATOR L.C. 0.1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'UP TO 200 µm',
    range2: 'Up to 2000 µm',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.3 µm',
    role2: '1.4 µm ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET & COMPARATOR STAND'
  },
  {
    no: '13',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'EXTERNAL MICROMETER (ALL TYPES) L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '>100 mm to 1000 mm',
    range2: '>25 mm to 100 mm',
    range3: 'up to 25 mm',
    range4: '',
    range5: '',
    role1: '9.7 µm',
    role2: ' 2.6 µm',
    role3: '0.9 µm ',
    role4: ' ',
    role5: ' ',
    method: 'USING MICROMETER CHECKER & GAUGE BLOCK SET'
  },
  {
    no: '14',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'FEELER GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '0.03 mm to 1 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '2.0 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '15',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'GLASS SCALE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 10 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '6.4 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE'
  },
  {
    no: '16',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'HEIGHT GAUGES (DIGITAL / DIAL / VERNIER) L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'UP to 1000 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '11.1 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING CALIPER CHECKER & GAUGE BLOCK SET'
  },
  {
    no: '17',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title:
      'INDUSTRIAL GAUGE & TEMPLATE ( WELD FILLET GAUGE,WELD HI-LO GAUGE,BRIDGE CAM WELD GAUGE, UNIVERSAL WELD GAUGE, PLAIN WORK PIECE) ANGULAR',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '0 degree to 180 degree',
    range2: 'up to 300 mm',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.46 min of arc',
    role2: ' 6.8 µm',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE, ANGLE GAUGE SET & GAUGE BLOCK SET'
  },
  {
    no: '18',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'INSIDE DIAL CALIPER L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 75 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '7.3 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'GAUGE BLOCK SET & ACCESSORIES'
  },
  {
    no: '19',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'INTERNAL MICROMETER (2 POINTS) L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '>500 mm to 1000 mm',
    range2: '11.0 µm',
    range3: '',
    range4: '',
    range5: '',
    role1: 'up to 500 mm',
    role2: '8.6 µm ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET & ACCESSORIES'
  },
  {
    no: '20',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'LEVER TYPE DIAL GAUGE L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 0.2 mm',
    range2: 'Up to 1.0 mm',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.1 µm',
    role2: ' 10.0 µm',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING DIAL GAUGE TESTER, GAUGE BLOCK SET & COMPARATOR STAND'
  },
  {
    no: '21',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'MASTER FOIL OF COATING THICKNESS GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 12 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.0 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '22',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'MEASURING TAPE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 100 meters',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '40.1 * SQRT(L/1000) µm, Lin mm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING SCALE & TAPE MEASURING EQUIPMENT'
  },
  {
    no: '23',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'MICROMETER HEAD L.C. 1 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 25 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '1.2 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET & COMPARATOR STAND'
  },
  {
    no: '24',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'MICROMETER SETTING ROD / STANDARD THICKNESS BLOCK',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '>100 mm to 300mm',
    range2: '300 mm to 600 mm',
    range3: '>600 mm to 1000 mm',
    range4: 'Up to 100 mm',
    range5: '',
    role1: '7.0 µm',
    role2: '8.5 µm ',
    role3: '11.5 µm ',
    role4: '3.6 µm ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '25',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PIE TAPE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'UP TO 10 m',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '40 * Sqrt(L/1000) µm, L in mm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING SCALE & TAPE MEASURING EQUIPMENT'
  },
  {
    no: '26',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PIN GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '1 mm to 10 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '2.0 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '27',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PISTOL CALIPER / OUTSIDE DIAL CALIPER L.C. 10 µm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 50 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '9.1 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET & ACCESSORIES'
  },
  {
    no: '28',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PLAIN PLUG GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 150 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '6.3 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR & GAUGE BLOCK SET'
  },
  {
    no: '29',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PLAIN RING GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '	Up to 150 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '4.4 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING ELECTRONIC COMPARATOR ,GAUGE BLOCK SET & 3 POINT MECHANICAL COMPARATOR'
  },
  {
    no: '30',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'PLAIN SNAP GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '3 mm to 100 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.6 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET'
  },
  {
    no: '31',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'RADIUS GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to to 40 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '11.4 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE'
  },
  {
    no: '32',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'SCALE & MEASURING TAPE CALIBRATOR',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '0 mm to 1000 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '10 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK SET'
  },
  {
    no: '33',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'STEEL SCALE L.C. 0.5 mm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 1000 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '40 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING SCALE & TAPE MEASURING EQUIPMENT'
  },
  {
    no: '34',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'SWG WIRE GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'up to 7.62 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '12 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE'
  },
  {
    no: '35',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'TAPER BORE GAUGE (SCALE TYPE) L.C. 0.1 mm',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 25 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '3.0 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING DIGITAL OUTSIDE MICROMETER'
  },
  {
    no: '36',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'TEST SIEVE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: '37 µm to 5 mm',
    range2: '5 mm to 20 mm',
    range3: '',
    range4: '',
    range5: '',
    role1: '	6.4 µm',
    role2: ' 	20 µm',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE & DIGITAL CALIPER'
  },
  {
    no: '37',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'THREAD PITCH GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 7 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '8.4 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE'
  },
  {
    no: '38',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'ULTRASONIC THICKNESS GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 300 mm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '	46.7 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING GAUGE BLOCK / STANDARD THICKNESS BLOCK'
  },
  {
    no: '39',
    name: 'MECHANICAL DIMENSION (BASIC MEASURING INSTRUMENT,GAUGE ETC.)',
    title: 'WET FILM THICKNESS GAUGE',
    title2: '',
    title3: '',
    title4: '',
    title5: '',
    title6: '',
    title7: '',
    title8: '',
    title9: '',
    range1: 'Up to 3000 µm',
    range2: '',
    range3: '',
    range4: '',
    range5: '',
    role1: '6.5 µm',
    role2: ' ',
    role3: ' ',
    role4: ' ',
    role5: ' ',
    method: 'USING VISION MEASURING MACHINE'
  }
];

export default function TableContainer(props: ITableContainerProps) {
  const { people } = props;
  return (
    <section className={`w-full flex justify-start items-center flex-wrap `}>
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 lg:my-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          {/* <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Case Study
          </p> */}
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            {/* {name} Case Studies */}
            Our Calibration scope
          </p>
        </div>
        {/* <div className="xs:hidden lg:flex-1 lg:flex justify-end items-start">
          <a
            href="/insights"
            className="flex items-center justify-center border border-buttonColor text-buttonColor px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-buttonColor hover:text-white cs-readmore"
          >
            View All
            <ButtonArrow className="ml-3" />
          </a>
        </div> */}
      </div>
      {/* <div className="max-w-7xl mb-20 mx-auto border flex flex-col"> */}
      <div className="w-full  items-center justify-between  lg:my-5 lg:container lg:mx-auto border border-customColors-1100">
        {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
        <div className="">
          <div className="align-middle inline-block min-w-full">
            <div className=" overflow-hidden ">
              <table className="min-w-full divide-y  divide-customColors-1100">
                <thead className="bg-customBackground-800">
                  <tr className="divide-x divide-customColors-1100">
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      SR NO
                    </th>
                    <th
                      scope="col"
                      className="px-1  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DISCIPLINE / GROUP
                    </th>
                    <th
                      scope="col"
                      className="px-1  break-words w-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MEASURAND OR REFERENCE MATERIAL/TYPE OF INSTRUMENT OR MATERIAL TO BE
                      CALIBRATED OR MEASURED / QUANTITY MEASURED / INSTRUMENT
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      MEASUREMENT RANGE AND ADDITIONAL PARAMETERS WHERE APPLICABLE(RANGE AND
                      FREQUENCY)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CALIBRATION AND MEASUREMENT CAPABILITY(CMC)(±)
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CALIBRATION OR MEASUREMENT METHOD OR PROCEDURE)
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-customColors-1100">
                  {people.map((person, personIdx) => (
                    <tr
                      className={
                        personIdx % 2 === 0
                          ? 'bg-white divide-x divide-customColors-1100'
                          : 'bg-customBackground-800 divide-x divide-customColors-1100'
                      }
                    >
                      <td className="px-3 w-12 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {person.no}
                        </span>
                      </td>
                      <td className="ml-3 pb-1 w-52">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="ml-3 pb-1 w-52 break-words">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-medium text-gray-900">
                              <tr>
                                <td>{person.title}</td>
                              </tr>
                              <tr>
                                <td>{person.title2}</td>
                              </tr>
                              <tr>
                                <td>{person.title3}</td>
                              </tr>
                              <tr>
                                <td>{person.title4}</td>
                              </tr>
                              <tr>
                                <td>{person.title5}</td>
                              </tr>
                              <tr>
                                <td>{person.title6}</td>
                              </tr>
                              <tr>
                                <td>{person.title7}</td>
                              </tr>
                              <tr>
                                <td>{person.title8}</td>
                              </tr>
                              <tr>
                                <td>{person.title9}</td>
                              </tr>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="px-1 py-4 w-24 break-words whitespace-nowrap text-sm text-gray-500">
                      
                        <tr>
                          <td>{person.title}</td>
                        </tr>
                        <tr>
                          <td>{person.title2}</td>
                        </tr>
                        <tr>
                          <td>{person.title3}</td>
                        </tr>
                        <tr>
                          <td>{person.title4}</td>
                        </tr>
                        <tr>
                          <td>{person.title5}</td>
                        </tr>
                        <tr>
                          <td>{person.title6}</td>
                        </tr>
                        <tr>
                          <td>{person.title7}</td>
                        </tr>
                        <tr>
                          <td>{person.title8}</td>
                        </tr>
                        <tr>
                          <td>{person.title9}</td>
                        </tr>
                      </td> */}
                      <td className="px-1 py-4 w-52 whitespace-nowrap text-sm text-gray-500">
                        <tr>
                          <td>{person.range1}</td>
                        </tr>
                        <tr>
                          <td>{person.range2}</td>
                        </tr>
                        <tr>
                          <td>{person.range3}</td>
                        </tr>
                        <tr>
                          <td>{person.range4}</td>
                        </tr>
                        <tr>
                          <td>{person.range5}</td>
                        </tr>
                        <tr>
                          <td>{person.range6}</td>
                        </tr>
                        <tr>
                          <td>{person.range7}</td>
                        </tr>
                        <tr>
                          <td>{person.range8}</td>
                        </tr>
                        <tr>
                          <td>{person.range9}</td>
                        </tr>
                      </td>
                      <td className="px-1 py-4  whitespace-nowrap text-sm text-gray-500">
                        <tr>
                          <td>{person.role1}</td>
                        </tr>
                        <tr>
                          <td>{person.role2}</td>
                        </tr>
                        <tr>
                          <td>{person.role3}</td>
                        </tr>
                        <tr>
                          <td>{person.role4}</td>
                        </tr>
                        <tr>
                          <td>{person.role5}</td>
                        </tr>
                        <tr>
                          <td>{person.role6}</td>
                        </tr>
                        <tr>
                          <td>{person.role7}</td>
                        </tr>
                        <tr>
                          <td>{person.role8}</td>
                        </tr>
                        <tr>
                          <td>{person.role9}</td>
                        </tr>
                      </td>
                      <td className="ml-3 pb-1 ">
                        <div className="text-sm text-gray-900">{person.method}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

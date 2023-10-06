/* eslint-disable no-unused-vars */
import {
  BigWay,
  Danger,
  DangerColor,
  DangerRightPriority,
  DangerRound,
  GiveWay,
  GiveWay150m,
  IrregularWay1,
  MainRoad,
  MainRoadEnd,
  OneWay,
  QuestionMark,
  RightPriority,
  RoundPriorityRight,
  Stop,
  Stop150m,
  IrregularWay2,
  IrregularWayDouble,
} from './svgs/SignSvgs';

import { SpeedCar, SUV } from './svgs/VehiculeSvgs';

import { PickingItem, PickingItemGroup } from './pickingitemsTypes';

const averageRoadSignProps: PickingItem['props'] = {
  dimensions: {
    height: 80,
    width: 80,
  },
};

const averageVehiculeProps: PickingItem['props'] = {
  dimensions: {
    height: 120,
    width: 80,
  },
};

const averageFusedSignsProps: PickingItem['props'] = {
  dimensions: {
    height: 120,
    width: 80,
  },
};

export const PickingItemsData: PickingItemGroup[] = [
  {
    groupname: 'اشارات المرور',
    items: [
      {
        name: 'giveWay',
        src: GiveWay,
        comp: true,
      },
      {
        name: 'mainRoad',
        src: MainRoad,
        comp: true,
      },
      {
        name: 'mainRoadEnd',
        src: MainRoadEnd,
        comp: true,
      },
      {
        name: 'rightPriority',
        src: RightPriority,
        comp: true,
      },
      {
        name: 'stop',
        src: Stop,
        comp: true,
      },
      {
        name: 'bigWay',
        src: BigWay,
        comp: true,
      },
      {
        name: 'DangerColor',
        src: DangerColor,
        comp: true,
      },
      {
        name: 'dangerRound',
        src: DangerRound,
        comp: true,
      },
      {
        name: 'RoundPriorityRight',
        src: RoundPriorityRight,
        comp: true,
      },
      {
        name: 'oneWay',
        src: OneWay,
        comp: true,
      },
      {
        name: 'QuestionMark',
        src: QuestionMark,
        comp: true,
      },
    ],
  },
  {
    groupname: 'اشارات مدمجة',
    items: [
      {
        name: 'giveWay150m',
        src: GiveWay150m,
        comp: true,
        props: averageFusedSignsProps,
      },

      {
        name: 'giveWayStop150m',
        src: Stop150m,
        comp: true,
        props: averageFusedSignsProps,
      },
      {
        name: 'danger',
        src: Danger,
        comp: true,
        props: averageFusedSignsProps,
      },
      {
        name: 'rightrightDanger',
        src: DangerRightPriority,
        comp: true,
        props: averageFusedSignsProps,
      },
    ],
  },
  {
    groupname: 'لوحات اضافية',
    items: [
      {
        name: 'IrregularWay1',
        src: IrregularWay1,
        comp: true,
      },
      {
        name: 'IrregularWay2',
        src: IrregularWay2,
        comp: true,
      },
      {
        name: 'IrregularWayDouble',
        src: IrregularWayDouble,
      },
    ],
  },
  {
    groupname: 'المركبات',
    items: [
      {
        name: 'SUV',
        src: SUV,
        comp: true,
        props: {
          dimensions: {
            width: 80,
            height: 120,
          },
        },
      },
      {
        name: 'SpeedCar',
        src: SpeedCar,
        comp: true,
        props: averageVehiculeProps,
      },
    ],
  },
  /* {
    groupname: "",
    items: [],
  }, */
];

export const randomshit = 33;

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      { id: 11, bizpartner_id: 114, name: 'Suzuki Taro', status: 1, last_update: '2018-07-12', updated_by: 'Yamada Ichiro' },
      { id: 12, bizpartner_id: 115, name: 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso', status: 1, last_update: '2018-08-12', updated_by: 'Yamada Ichiro' },
      { id: 13, bizpartner_id: 111, name: 'Sato Hanako', status: 0, last_update: '2018-08-03', updated_by: 'Yamada Ichiro' },
      { id: 14, bizpartner_id: 113, name: 'Mobutu Sese Seko Kuku Ngbendu Wa Za Banga', status: 0, last_update: '2018-07-29', updated_by: 'Yamada Ichiro' },
      { id: 15, bizpartner_id: 117, name: 'Alexa Dimitrova', status: 1, last_update: '2018-06-30', updated_by: 'Yamada Ichiro' }
    ];
    const bizpartners = [
      { id: 111, name: 'Sato Hanako', status: true },
      { id: 112, name: 'Sean Kim', status: false },
      { id: 113, name: 'Joseph-Désiré Mobutu', status: false },
      { id: 114, name: 'Suzuki Taro', status: false },
      { id: 115, name: 'Pablo Picasso', status: false },
      { id: 116, name: 'Jugemu Jugemu Goko no Surikire Chokyumei no Chosuke', status: true },
      { id: 117, name: 'Alexa Dimitrova', status: false },
      { id: 118, name: 'Aneesh Raj', status: false },
      { id: 119, name: 'Wang Zhangwu', status: false }
    ];
    const notices = [
      { id: 211, owner_id: 11, content: 'Test.', last_update: '2018-07-14', updated_by: 'Yamada Ichiro' },
      { id: 212, owner_id: 13, content: 'Please!',  last_update: '2018-08-05', updated_by: 'Kato Yasuo' },
      { id: 213, owner_id: 11, content: 'Fuck!',  last_update: '2018-07-28', updated_by: 'Yamada Ichiro' },
    ]
    return {owners, bizpartners, notices};
  }
}
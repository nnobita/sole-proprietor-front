import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      { id: 11, name: 'Suzuki Taro', status: true, last_update: '2018-07-12', updated_by: 'Yamada Ichiro' },
      { id: 12, name: 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso', status: true, last_update: '2018-08-12', updated_by: 'Yamada Ichiro' },
      { id: 13, name: 'Sato Hanako', status: false, last_update: '2018-08-03', updated_by: 'Yamada Ichiro' },
      { id: 14, name: 'Mobutu Sese Seko Kuku Ngbendu Wa Za Banga', status: false, last_update: '2018-07-29', updated_by: 'Yamada Ichiro' },
      { id: 15, name: 'Alexa Dimitrova', status: true, last_update: '2018-06-30', updated_by: 'Yamada Ichiro' }
    ];
    const bizpartners = [
      { id: 111, name: 'Sato Hanako', status: true },
      { id: 112, name: 'Sean Kim', status: false },
      { id: 113, name: 'Joseph-Désiré Mobutu', status: false },
      { id: 114, name: 'Suzuki Taro', status: false },
      { id: 115, name: 'Pablo Picasso', status: false },
      { id: 116, name: 'Jugemu Jugemu Goko no Surikire Chokyumei no Chosuke', status: true },
      { id: 117, name: 'Alexa Dimitrova', status: false }
    ];
    const notice = [
      { id: 211, owner_id: 11, last_update: '2018-07-14', updated_by: 'Yamada Ichiro' },
      { id: 212, owner_id: 13, last_update: '2018-08-05', updated_by: 'Kato Yasuo' },
      { id: 213, owner_id: 11, last_update: '2018-07-28', updated_by: 'Yamada Ichiro' },
    ]
    return {owners, bizpartners};
  }
}
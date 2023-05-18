import { Component, OnInit } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  networkListener!: PluginListenerHandle;
  connectionStatus!: ConnectionStatus;

  constructor() {
  }

 ngOnInit() {
    if(Network) {
      Network.getStatus().then(status => {
        this.connectionStatus = status
        console.log(status);
      })
    } else {
      console.log('Nothing');
    }
    Network.addListener('networkStatusChange', status => {
      this.connectionStatus = status;
      console.log(status);
    })
  }


}

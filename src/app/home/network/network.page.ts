import { Component, NgZone, OnInit } from '@angular/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  networkListener!: PluginListenerHandle;
  status!: string;


  constructor(private ngZone: NgZone,
              ) {}

  async ngOnInit() {
    this.networkListener = await Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      // this.status = status;
      this.ngZone.run((status) => {
        this.status = status.connected ? 'Online' : 'Offline';
        console.log(this.status);
      })
    });
    // this.status = await Network.getStatus();
    console.log('Network status', this.status);
  }


}

import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss']
})
export class PropostaComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    $('#multicol-language').select2();
    $('#multicol-country').select2({
        placeholder: "Select a country",
        allowClear: true
      });
    $('#1').select2();
    $('#mySelect2').select2();
  }

}

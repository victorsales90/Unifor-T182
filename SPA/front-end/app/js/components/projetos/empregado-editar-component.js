"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const empregado_service_1 = require('../.././services/empregado-service');
const router_1 = require('@angular/router');
let EmpregadoEditarComponent = class EmpregadoEditarComponent {
    constructor(route, router, empregadoService) {
        this.route = route;
        this.router = router;
        this.empregadoService = empregadoService;
    }
    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.empregado = this.empregadoService.buscarPorId(this.id);
    }
    atualizar() {
        this.empregadoService.atualizar(this.id, this.empregado);
        this.router.navigate(['/empregado-listar']);
    }
};
EmpregadoEditarComponent = __decorate([
    core_1.Component({
        selector: 'empregado-editar',
        templateUrl: 'app/views/empregados/editar.html',
        providers: [empregado_service_1.EmpregadoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, empregado_service_1.EmpregadoService])
], EmpregadoEditarComponent);
exports.EmpregadoEditarComponent = EmpregadoEditarComponent;
//# sourceMappingURL=empregado-editar-component.js.map
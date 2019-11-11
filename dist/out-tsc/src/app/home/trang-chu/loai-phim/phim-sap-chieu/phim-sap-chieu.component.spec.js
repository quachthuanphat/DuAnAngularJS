import { async, TestBed } from '@angular/core/testing';
import { PhimSapChieuComponent } from './phim-sap-chieu.component';
describe('PhimSapChieuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhimSapChieuComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PhimSapChieuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=phim-sap-chieu.component.spec.js.map
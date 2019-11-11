import { async, TestBed } from '@angular/core/testing';
import { PhimDangChieuComponent } from './phim-dang-chieu.component';
describe('PhimDangChieuComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhimDangChieuComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PhimDangChieuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=phim-dang-chieu.component.spec.js.map
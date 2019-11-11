import { async, TestBed } from '@angular/core/testing';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
describe('ChiTietPhimComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChiTietPhimComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChiTietPhimComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chi-tiet-phim.component.spec.js.map
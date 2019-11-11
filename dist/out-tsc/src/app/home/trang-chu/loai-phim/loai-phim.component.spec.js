import { async, TestBed } from '@angular/core/testing';
import { LoaiPhimComponent } from './loai-phim.component';
describe('LoaiPhimComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaiPhimComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LoaiPhimComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=loai-phim.component.spec.js.map